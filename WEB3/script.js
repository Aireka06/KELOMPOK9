const contractAddress = "0x6ca0d865e53860e72f783f8bf351643127a48963";
const abiPath = "abi/SensorStorage.abi";
const rpcURL = "http://127.0.0.1:8545";

let chart;

async function loadSensorData() {
  try {
    const abiRes = await fetch(abiPath);
    const abi = await abiRes.json();
    console.log("ABI loaded successfully");

    const provider = new ethers.JsonRpcProvider(rpcURL);
    const contract = new ethers.Contract(contractAddress, abi, provider);

    const filter = contract.filters.DataStored();
    const events = await contract.queryFilter(filter, 0, "latest");

    console.log("Events received:", events);

    const tableBody = document.querySelector("#sensorTable tbody");
    tableBody.innerHTML = "";

    const labels = [];
    const temps = [];
    const hums = [];

    if (events.length === 0) {
      tableBody.innerHTML = `<tr><td colspan="8">Tidak ada data sensor ditemukan.</td></tr>`;
      return;
    }

    events.forEach((e) => {
      const data = e.args;
      const timeStr = new Date(Number(data.timestamp) * 1000).toLocaleString();
      const temp = Number(data.temperature) / 100;
      const hum = Number(data.humidity) / 100;

      const energy = calculateEnergyCost(temp, hum);

      tableBody.innerHTML += `
        <tr>
          <td>${timeStr}</td>
          <td>${data.sensorId}</td>
          <td>${data.location}</td>
          <td>${data.stage}</td>
          <td>${temp.toFixed(2)}</td>
          <td>${hum.toFixed(2)}</td>
          <td>${energy.kWh}</td>
          <td>
            Rp ${energy.cost.toLocaleString('id-ID')}
            <small style="color:#00f3ff">${energy.note}</small>
          </td>
        </tr>
      `;

      labels.push(timeStr);
      temps.push(temp);
      hums.push(hum);
    });

    renderChart(labels, temps, hums);
  } catch (error) {
    console.error("Gagal memuat data sensor:", error);
    alert("Terjadi kesalahan saat mengambil data sensor. Lihat console untuk detailnya.");
  }
}

function calculateEnergyCost(temp, humidity) {
  const baseTariff = 1444.7;
  let kWh = 1;
  let details = [];

  if (temp > 27) {
    const cooling = (temp - 27) * 0.5;
    kWh += cooling;
    details.push(`+${cooling.toFixed(2)} kWh (Cooling Fan)`);
  } else if (temp < 20) {
    const heating = (20 - temp) * 0.3;
    kWh += heating;
    details.push(`+${heating.toFixed(2)} kWh (Heater)`);
  }

  if (humidity < 50) {
    kWh += 0.75;
    details.push(`+0.75 kWh (Humidifier)`);
  } else if (humidity > 85) {
    kWh += 0.75;
    details.push(`+0.75 kWh (Dehumidifier)`);
  }

  const cost = kWh * baseTariff;

  return {
    kWh: kWh.toFixed(2),
    cost: Math.round(cost),
    note: details.join(', ')
  };
}

function renderChart(labels, temps, hums) {
  const ctx = document.getElementById('chart').getContext('2d');

  if (chart) chart.destroy();

  chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: [
        {
          label: "Temperature (°C)",
          data: temps,
          borderColor: 'rgba(255, 99, 132, 1)',
          fill: false
        },
        {
          label: "Humidity (%)",
          data: hums,
          borderColor: 'rgba(54, 162, 235, 1)',
          fill: false
        }
      ]
    },
    options: {
      responsive: true,
      scales: {
        y: { beginAtZero: true }
      }
    }
  });
} 



