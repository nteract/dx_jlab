import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the dx_jlab extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'dx_jlab:plugin',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension dx_jlab is activated!');
  }
};

export default plugin;
