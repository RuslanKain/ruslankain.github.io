import React from 'react';
import Slide from './Slide';

const MainContent = () => {
  return (
    <main>
      <Slide id="publications" title="Publications">
        <ul>
          <li>Ruslan Kain, et al. (2023). "DRUDGE: Dynamic Resource Usage Data Generation for Extreme Edge Devices" - IEEE Global Communications Conference (GLOBECOM).</li>
          <li>Ruslan Kain, et al. (2023). "RUMP: Resource Usage Multi-Step Prediction in Extreme Edge Computing" - Computer Communications, Volume 210.</li>
          <li>Ruslan Kain, et al. (2022). "Multi-step Prediction of Worker Resource Usage at the Extreme Edge" - ACM MSWiM '22.</li>
          <li>Ruslan Kain, et al. (2022). "Worker Resource Characterization Under Dynamic Usage in Multi-access Edge Computing" - IEEE IWCMC.</li>
          <li>Ruslan Kain, et al. (2021). "An Optimization Approach to Multi-Sensor Operation for Multi-Context Recognition" - Sensors 2021.</li>
          <li>Ruslan Kain, et al. (2021). "The index selection problem with configurations and memory limitation: A scatter search approach" - Computers & Operations Research.</li>
        </ul>
      </Slide>
      <Slide id="data" title="Data">
        <p>
          The dataset includes dynamic resource usage information associated with running edge-native applications on a set of four heterogeneous Raspberry Pi 4 Devices. The data spans 768 hours of operation, collected at five-second intervals, capturing extensive metrics on CPU usage, memory, and network activity.
        </p>
        <p>
          Detailed dataset for Multi-Sensor Operation in Multi-Context Recognition Scenarios is also available, documenting timeslot-based sensor activities and corresponding system responses.
        </p>
        <a href="https://borealisdata.ca/dataset.xhtml?persistentId=doi:10.5683/SP3/GOZAJE">Dataset 1</a>
        <a href="https://github.com/RuslanKain/optimization-multi-context-recognition/blob/main/SmarterTimeTimeslots%206-6-2019.csv">Borealis Dataset</a>
      </Slide>
      <Slide id="codebase" title="Codebase">
        <p>
          Contains scripts for dynamic resource usage data generation on Raspberry Pi devices, supporting diverse application simulations from video streaming to augmented reality. The repository includes tools for data analysis, multi-step prediction, and visualization of edge computing scenarios.
        </p>
        <a href="https://github.com/RuslanKain/rump-ec">rump-ec Repository</a>
      </Slide>
      <Slide id="experimental-setups" title="Experimental Setups">
        <p>
          DRUDGE, a simulation tool for Extreme Edge Devices, emulates diverse application behaviors on Raspberry Pi 4B devices. These setups modify device characteristics like CPU frequency and RAM usage to match real-world scenarios, providing a controlled environment for testing and development.
        </p>
        <p>
          Key applications tested include video gaming, streaming, and IoT simulations. Each setup is documented for reproducibility, with data collected to analyze performance impacts under varying network conditions.
        </p>
        <img src="../assets/images/setup-image.jpg" alt="PhD Thesis Setup" />
      </Slide>
    </main>
  );
};

export default MainContent;

