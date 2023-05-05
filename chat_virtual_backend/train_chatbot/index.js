const { GoogleAuth } = require('google-auth-library');
const { AgentsClient } = require('@google-cloud/dialogflow-cx');
const dotenv = require('dotenv');
dotenv.config({ path: '../config.env' });

async function listAgents() {
  // Configura la autenticación de Google usando GOOGLE_APPLICATION_CREDENTIALS
  const auth = new GoogleAuth({
    keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
    scopes: ['https://www.googleapis.com/auth/cloud-platform'],
  });

  // Crea un cliente de Dialogflow

  // Obtiene el ID del proyecto a partir de las credenciales
  const projectId = await auth.getProjectId();

  const agentsClient = new AgentsClient({
    apiEndpoint: 'us-central1-dialogflow.googleapis.com',
  });

  // Define el parentPath
  const parentPath = `projects/${projectId}/locations/us-central1`;

  // Lista los agentes en el proyecto

  try {
    console.log(`Project ID: ${projectId}`);
    console.log(`Parent Path: ${parentPath}`);
    const [agents] = await agentsClient.listAgents({ parent: parentPath });
    console.log(agents);
    agents.forEach((ele) => console.log(ele.displayName));
    // Lista los agentes
  } catch (error) {
    console.error('Error al listar agentes:', error);
  }
}

listAgents();
