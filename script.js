// script.js

// --- ICON SVG DEFINITIONS (Copied from Lucide-React for direct SVG use) ---
const icons = {
    Network: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-network"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M12 8v4"/><path d="M12 12h2a2 2 0 0 1 2 2v2"/><path d="M12 12H9a2 2 0 0 0-2 2v2"/><path d="M12 12V8"/><path d="M16 16v-2a2 2 0 0 0-2-2h-2"/><path d="M8 16v-2a2 2 0 0 1 2-2h2"/></svg>`,
    GitBranch: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-git-branch"><line x1="6" x2="6" y1="3" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>`,
    Server: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-server"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><path d="M6 6h.01"/><path d="M6 18h.01"/></svg>`,
    Dna: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-dna"><path d="M2 15c6.667-6 10-4 16 2"/><path d="M22 9c-6.667 6-10 4-16-2"/><path d="M11.5 8.5 7 13"/><path d="m16.5 15.5 4-4"/><path d="M8 7v3"/><path d="M16 14v3"/><path d="M2 13h2"/><path d="M20 11h2"/><path d="M13 2h-2"/><path d="M9 22h-2"/><path d="M17 2h2"/><path d="M15 22h2"/><path d="M22 16h-2"/><path d="M4 8H2"/></svg>`,
    History: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-history"><path d="M3 12a9 9 0 1 0 9-9A9.75 9.75 0 0 0 6.2 6"/><path d="M12 7v5l4 2"/></svg>`,
    FileText: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>`,
    Router: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-router"><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><path d="M10 14V2"/><path d="M14 14V2"/><path d="M6 18h.01"/><path d="M18 18h.01"/></svg>`,
    Printer: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-printer"><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"/><rect x="6" y="14" width="12" height="8" rx="1"/></svg>`,
    Laptop: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-laptop"><path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.94 1.45H3.66a1 1 0 0 1-.94-1.45L4 16"/><path d="M12 16h.01"/></svg>`,
    HardDrive: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-hard-drive"><path d="M22 12H2"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/><path d="M6 16h.01"/><path d="M10 16h.01"/></svg>`,
    Users: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    FileCode: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-code"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="m10 13-2 2 2 2"/><path d="m14 17 2-2-2-2"/></svg>`,
    Presentation: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-presentation"><path d="M2 3h20"/><path d="M21 16v-4a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v4"/><path d="M12 16v5"/><path d="M8 21h8"/><path d="M12 12v4"/></svg>`,
    ChevronsRight: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevrons-right"><path d="m6 17 5-5-5-5"/><path d="m13 17 5-5-5-5"/></svg>`,
    X: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`,
};

// --- GLOBAL STATE MANAGEMENT (equivalent to React's useState) ---
let nodes = [];
let edges = [];
let selectedNode = null;
let sourceNode = null;
let destinationNode = null;
let packet = null;
let log = ["Simulation log initialized. Select a source and destination to begin."];
let isSimulating = false;
let animationFrameId = null; // To store requestAnimationFrame ID for cancellation
let activeView = 'simulation'; // Default active view

// Utility for creating SVG elements
const SVG_NS = "http://www.w3.org/2000/svg";

function createSvgElement(tag, attributes = {}) {
    const el = document.createElementNS(SVG_NS, tag);
    for (const key in attributes) {
        el.setAttribute(key, attributes[key]);
    }
    return el;
}

// --- INITIAL DATA (UPDATED FOR BETTER LAYOUT AND CONNECTIONS) ---
const initialNodes = [
    // Core Network (Routers connecting departments/zones)
    { id: 'Router0', label: 'Router0', type: 'router', ip: '10.10.0.1 / 192.168.1.0', x: 450, y: 350, status: 'idle' }, // Central Router
    { id: 'Router1', label: 'Router1', type: 'router', ip: '10.10.0.2 / 20.20.0.2', x: 650, y: 350, status: 'idle' }, // Connects to Router0 and Server/Other Dept
    { id: 'Router2', label: 'Router2', type: 'router', ip: '20.20.0.1 / 1.0.0.1', x: 850, y: 350, status: 'idle' }, // Connects to Router1 and Internet Lab / Servers

    // IT Department (Left side, connected to Router0)
    { id: 'Switch0', label: 'IT Switch', type: 'switch', ip: null, x: 250, y: 350, status: 'idle' },
    { id: 'HOD_CABIN', label: 'IT HOD', type: 'pc', ip: '192.168.1.2', x: 150, y: 250, status: 'idle' },
    { id: 'IT_LAB_1', label: 'IT Lab 1', type: 'pc', ip: '192.168.1.3', x: 250, y: 250, status: 'idle' },
    { id: 'IT_LAB_2', label: 'IT Lab 2', type: 'pc', ip: '192.168.1.4', x: 350, y: 250, status: 'idle' },
    { id: 'IT_LAB_3', label: 'IT Lab 3', type: 'pc', ip: '192.168.1.5', x: 150, y: 450, status: 'idle' },
    { id: 'IT_LAB_4', label: 'IT Lab 4', type: 'pc', ip: '192.168.1.6', x: 250, y: 450, status: 'idle' },
    { id: 'Printer0', label: 'IT Printer', type: 'printer', ip: '192.168.1.1', x: 350, y: 450, status: 'idle' },

    // Computer Department (Bottom left, connected to Router0)
    { id: 'Switch1', label: 'CS Switch', type: 'switch', ip: null, x: 450, y: 550, status: 'idle' },
    { id: 'CS_HOD_CABIN', label: 'CS HOD', type: 'pc', ip: '192.168.2.2', x: 350, y: 650, status: 'idle' },
    { id: 'CS_LAB_1', label: 'CS Lab 1', type: 'pc', ip: '192.168.2.3', x: 450, y: 650, status: 'idle' },
    { id: 'CS_LAB_2', label: 'CS Lab 2', type: 'pc', ip: '192.168.2.4', x: 550, y: 650, status: 'idle' },
    { id: 'CS_LAB_3', label: 'CS Lab 3', type: 'pc', ip: '192.168.2.5', x: 350, y: 750, status: 'idle' },
    { id: 'CS_LAB_4', label: 'CS Lab 4', type: 'pc', ip: '192.168.2.6', x: 450, y: 750, status: 'idle' },

    // Internet Lab (Top right, connected to Router2)
    { id: 'Switch5', label: 'Internet Lab Switch', type: 'switch', ip: null, x: 850, y: 150, status: 'idle' },
    { id: 'PC1_IL', label: 'IL PC1', type: 'pc', ip: '128.168.0.2', x: 750, y: 50, status: 'idle' },
    { id: 'PC2_IL', label: 'IL PC2', type: 'pc', ip: '128.168.0.3', x: 850, y: 50, status: 'idle' },
    { id: 'PC4_IL', label: 'IL PC4', type: 'pc', ip: '128.168.0.4', x: 950, y: 50, status: 'idle' },
    { id: 'PC5_IL', label: 'IL PC5', type: 'pc', ip: '128.168.0.5', x: 750, y: 250, status: 'idle' },
    { id: 'Printer5_IL', label: 'IL Printer', type: 'printer', ip: '128.168.0.6', x: 950, y: 250, status: 'idle' },

    // Server Room (Top middle, connected to Router2)
    { id: 'Switch4', label: 'Server Switch', type: 'switch', ip: null, x: 1050, y: 150, status: 'idle' },
    { id: 'Server_FTP', label: 'FTP Server', type: 'server', ip: '1.0.0.4', x: 1050, y: 50, status: 'idle' },
    { id: 'Server_WEB', label: 'WEB Server', type: 'server', ip: '1.0.0.3', x: 1150, y: 50, status: 'idle' },
    { id: 'Server_DNS', label: 'DNS Server', type: 'server', ip: '1.0.0.2', x: 1050, y: 250, status: 'idle' },
    { id: 'PC1_SR', label: 'Admin PC', type: 'pc', ip: '1.0.0.5', x: 1150, y: 250, status: 'idle' },

    // "Other" Department (Bottom middle, connected to Router1)
    { id: 'Switch2', label: 'Other Dept Switch', type: 'switch', ip: null, x: 650, y: 550, status: 'idle' },
    { id: 'Office_PC', label: 'Office PC', type: 'pc', ip: '192.168.3.2', x: 550, y: 650, status: 'idle' },
    { id: 'Exam_Cell_PC', label: 'Exam Cell', type: 'pc', ip: '192.168.3.3', x: 650, y: 650, status: 'idle' },
    { id: 'Enquiry_PC', label: 'Enquiry PC', type: 'pc', ip: '192.168.3.4', x: 750, y: 650, status: 'idle' },
    { id: 'TPO_PC', label: 'TPO PC', type: 'pc', ip: '192.168.3.5', x: 550, y: 750, status: 'idle' },
    { id: 'Printer2', label: 'Other Printer', type: 'printer', ip: '192.168.3.0', x: 750, y: 750, status: 'idle' },

    // Principle Room (Bottom right, connected to Router1)
    { id: 'Switch3', label: 'Principle Switch', type: 'switch', ip: null, x: 850, y: 550, status: 'idle' },
    { id: 'PC0_PR', label: 'Principle PC', type: 'pc', ip: '192.168.4.2', x: 850, y: 650, status: 'idle' },
    { id: 'Laptop0_PR', label: 'Principle Laptop', type: 'laptop', ip: '192.168.4.3', x: 950, y: 650, status: 'idle' },
];

const initialEdges = [
    // Core Router Connections (WAN links between main routers)
    { from: 'Router0', to: 'Router1', isWAN: true },
    { from: 'Router1', to: 'Router2', isWAN: true },

    // IT Department (Router0 to Switch0)
    { from: 'Router0', to: 'Switch0' },
    { from: 'Switch0', to: 'HOD_CABIN' },
    { from: 'Switch0', to: 'IT_LAB_1' },
    { from: 'Switch0', to: 'IT_LAB_2' },
    { from: 'Switch0', to: 'IT_LAB_3' },
    { from: 'Switch0', to: 'IT_LAB_4' },
    { from: 'Switch0', to: 'Printer0' },

    // Computer Department (Router0 to Switch1)
    { from: 'Router0', to: 'Switch1' },
    { from: 'Switch1', to: 'CS_HOD_CABIN' },
    { from: 'Switch1', to: 'CS_LAB_1' },
    { from: 'Switch1', to: 'CS_LAB_2' },
    { from: 'Switch1', to: 'CS_LAB_3' },
    { from: 'Switch1', to: 'CS_LAB_4' },

    // Internet Lab (Router2 to Switch5)
    { from: 'Router2', to: 'Switch5' },
    { from: 'Switch5', to: 'PC1_IL' },
    { from: 'Switch5', to: 'PC2_IL' },
    { from: 'Switch5', to: 'PC4_IL' },
    { from: 'Switch5', to: 'PC5_IL' },
    { from: 'Switch5', to: 'Printer5_IL' },

    // Server Room (Router2 to Switch4)
    { from: 'Router2', to: 'Switch4' },
    { from: 'Switch4', to: 'Server_FTP' },
    { from: 'Switch4', to: 'Server_WEB' },
    { from: 'Switch4', to: 'Server_DNS' },
    { from: 'Switch4', to: 'PC1_SR' },

    // "Other" Department (Router1 to Switch2)
    { from: 'Router1', to: 'Switch2' },
    { from: 'Switch2', to: 'Office_PC' },
    { from: 'Switch2', to: 'Exam_Cell_PC' },
    { from: 'Switch2', to: 'Enquiry_PC' },
    { from: 'Switch2', to: 'TPO_PC' },
    { from: 'Switch2', to: 'Printer2' },

    // Principle Room (Router1 to Switch3)
    { from: 'Router1', to: 'Switch3' },
    { from: 'Switch3', to: 'PC0_PR' },
    { from: 'Switch3', to: 'Laptop0_PR' },
];


// --- UTILITY FUNCTIONS ---

function addLog(message) {
    const timestamp = new Date().toLocaleTimeString();
    const formattedMessage = `[${timestamp}] ${message}`;
    log.unshift(formattedMessage); // Add to the beginning
    if (log.length > 50) { // Keep log size manageable
        log = log.slice(0, 50);
    }
    renderLogPanel();
}

function findPath(startId, endId) {
    const nodesMap = new Map(nodes.map(n => [n.id, n]));
    const queue = [[startId, [startId]]];
    const visited = new Set([startId]);

    while (queue.length > 0) {
        const [currentId, path] = queue.shift();

        if (currentId === endId) {
            return path;
        }

        const neighbors = edges
            .filter(e => e.from === currentId || e.to === currentId)
            .map(e => e.from === currentId ? e.to : e.from);

        for (const neighborId of neighbors) {
            if (!visited.has(neighborId)) {
                visited.add(neighborId);
                queue.push([neighborId, [...path, neighborId]]);
            }
        }
    }
    return null;
}

// --- RENDERING FUNCTIONS (Vanilla JS equivalent of React Components) ---

function renderHeader() {
    // Header is static HTML, no dynamic rendering needed here.
}

function renderNav() {
    const navButtons = document.querySelectorAll('.nav-button');
    navButtons.forEach(button => {
        button.classList.remove('active');
        if (button.dataset.view === activeView) {
            button.classList.add('active');
        }
        button.onclick = () => {
            setActiveView(button.dataset.view);
        };
    });
}

function setActiveView(viewId) {
    activeView = viewId;
    document.querySelectorAll('.view-section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(`${viewId}-view`).classList.add('active');
    renderNav(); // Re-render nav to update active button styling
    // Re-render specific views if they contain dynamic content that changes when viewed
    if (activeView === 'simulation') {
        renderSimulationView();
    } else if (activeView === 'documentation') {
        renderDocumentation();
    } else if (activeView === 'files') {
        renderFilesAndTeamView();
    } else if (activeView === 'assignments') {
        renderAssignmentsView();
    }
}

function renderFooter() {
    // Footer is static HTML, no dynamic rendering needed here.
}

// --- SIMULATION RENDERING ---

function renderSimulationView() {
    const simulationViewDiv = document.getElementById('simulation-view');
    simulationViewDiv.innerHTML = `
        <div class="simulation-container">
            <div class="main-content">
                <div class="network-diagram-wrapper">
                    <div class="network-diagram-container">
                        <svg id="network-diagram-svg" width="100%" height="100%" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid meet">
                            <defs>
                                <filter id="node-glow" x="-50%" y="-50%" width="200%" height="200%">
                                    <feGaussianBlur stdDeviation="5" result="coloredBlur" />
                                    <feMerge>
                                        <feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>
                                <filter id="packet-glow" x="-50%" y="-50%" width="200%" height="200%">
                                    <feGaussianBlur stdDeviation="8" result="coloredBlur" />
                                    <feMerge>
                                        <feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>
                            </defs>
                        </svg>
                    </div>
                </div>
                <div class="side-panel">
                    <div class="control-panel clay-panel">
                        <h3 class="panel-title">Controls</h3>
                        <div class="control-content">
                            <div class="info-display">
                                <p>Source: <span id="source-node-display" class="source-node">${sourceNode ? sourceNode.label : 'None'}</span></p>
                                <p>Destination: <span id="destination-node-display" class="destination-node">${destinationNode ? destinationNode.label : 'None'}</span></p>
                            </div>
                            <div class="control-buttons">
                                <button id="start-simulation-btn" class="clay-button">${isSimulating ? 'Running...' : 'Start'}</button>
                                <button id="reset-simulation-btn" class="clay-button">Reset</button>
                            </div>
                        </div>
                    </div>
                    <div class="log-panel clay-panel">
                        <h3 class="panel-title">Event Log</h3>
                        <div id="log-container" class="log-container"></div>
                    </div>
                </div>
            </div>
            <div id="info-panel-container" class="info-panel-wrapper"></div>
        </div>
    `;

    // Add necessary styles
    const style = document.createElement('style');
    style.textContent = `
        .simulation-container {
            height: 100vh;
            min-height: 0;
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            padding: 1rem;
        }

        .main-content {
            display: flex;
            gap: 1rem;
            flex: 1;
            min-height: 0; /* Important for nested flex containers */
            margin-top: 0.5rem !important; /* or 0 */
        }

        .network-diagram-wrapper {
            flex: 1;
            min-width: 0; /* Important for nested flex containers */
            background: var(--bg-secondary);
            border-radius: 1rem;
            padding: 1rem;
            box-shadow: var(--shadow-sm);
        }

        .network-diagram-container {
            width: 100%;
            height: 100%;
            min-height: 600px;
            position: relative;
        }

        .side-panel {
            width: 300px;
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        .control-panel, .log-panel {
            flex: 1;
            min-height: 0;
            display: flex;
            flex-direction: column;
        }

        .control-content {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            padding: 1rem;
        }

        .info-display {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }

        .control-buttons {
            display: flex;
            gap: 0.5rem;
        }

        .log-container {
            flex: 1;
            overflow-y: auto;
            padding: 1rem;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }

        .info-panel-wrapper {
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            z-index: 1000;
        }

        .info-panel {
            max-width: 300px;
            position: relative;
        }

        @media (max-width: 1024px) {
            .main-content {
                flex-direction: column;
            }

            .side-panel {
                width: 100%;
                flex-direction: row;
            }

            .control-panel, .log-panel {
                flex: 1;
            }
        }

        @media (max-width: 768px) {
            .side-panel {
                flex-direction: column;
            }
        }

        #simulation-view.view-section {
            padding-top: 0.5rem !important; /* or 0 if you want it flush to the top */
        }
        .simulation-container {
            padding-top: 0 !important;
        }
    `;
    document.head.appendChild(style);

    // Attach event listeners
    document.getElementById('start-simulation-btn').onclick = handleStartSimulation;
    document.getElementById('reset-simulation-btn').onclick = handleResetSimulation;

    renderNetworkDiagram();
    renderControlPanel();
    renderLogPanel();
    renderInfoPanel();
}

function renderNetworkDiagram() {
    const svg = document.getElementById('network-diagram-svg');
    if (!svg) return;

    // Clear previous elements
    svg.innerHTML = `
        <defs>
            <filter id="node-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="5" result="coloredBlur" />
                <feMerge>
                    <feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
            <filter id="packet-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="8" result="coloredBlur" />
                <feMerge>
                    <feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
        </defs>
    `; // Re-add defs

    // Render Edges
    edges.forEach(edge => {
        const fromNode = nodes.find(n => n.id === edge.from);
        const toNode = nodes.find(n => n.id === edge.to);
        if (fromNode && toNode) {
            const line = createSvgElement('line', {
                x1: fromNode.x, y1: fromNode.y, x2: toNode.x, y2: toNode.y,
                stroke: edge.isWAN ? "#f472b6" : "#4a5568",
                'stroke-width': edge.isWAN ? "2.5" : "1.5",
                'stroke-dasharray': edge.isWAN ? "6 3" : "none",
                class: edge.isWAN ? 'edge-line edge-wan' : 'edge-line'
            });
            svg.appendChild(line);
        }
    });

    // Render Nodes
    nodes.forEach(node => {
        const group = createSvgElement('g', {
            transform: `translate(${node.x}, ${node.y})`,
            class: `node-group ${node.status === 'active' ? 'node-active' : ''} ${sourceNode && sourceNode.id === node.id ? 'node-is-source' : ''} ${destinationNode && destinationNode.id === node.id ? 'node-is-destination' : ''}`
        });

        const circle = createSvgElement('circle', {
            cx: "0", cy: "0", r: "18",
            class: 'node-circle' // Styles handled by CSS class
        });
        group.appendChild(circle);

        // Append SVG icon
        const iconContainer = document.createElementNS(SVG_NS, 'g');
        iconContainer.innerHTML = icons[node.type.charAt(0).toUpperCase() + node.type.slice(1)] || icons['HardDrive']; // Get icon SVG
        const iconSvg = iconContainer.firstChild;
        iconSvg.setAttribute('x', '-12'); // Adjust position to center
        iconSvg.setAttribute('y', '-12');
        iconSvg.setAttribute('width', '24'); // Match Lucide default size
        iconSvg.setAttribute('height', '24');
        iconSvg.classList.add('node-icon', `node-type-${node.type}`); // Add type class for coloring
        group.appendChild(iconSvg);

        const text = createSvgElement('text', {
            x: "0", y: "32", 'text-anchor': "middle",
            class: 'node-label'
        });
        text.textContent = node.label;
        group.appendChild(text);

        group.onclick = () => handleNodeClick(node);
        svg.appendChild(group);
    });

    // Render Packet
    if (packet) {
        const packetCircle = createSvgElement('circle', {
            cx: packet.x, cy: packet.y, r: "8",
            class: 'packet'
        });
        const animate = createSvgElement('animate', {
            attributeName: 'r', from: '8', to: '12', dur: '0.7s', repeatCount: 'indefinite'
        });
        packetCircle.appendChild(animate);
        svg.appendChild(packetCircle);
    }
}

function renderControlPanel() {
    const sourceDisplay = document.getElementById('source-node-display');
    const destinationDisplay = document.getElementById('destination-node-display');
    const startButton = document.getElementById('start-simulation-btn');

    if (sourceDisplay) sourceDisplay.textContent = sourceNode ? sourceNode.label : 'None';
    if (destinationDisplay) destinationDisplay.textContent = destinationNode ? destinationNode.label : 'None';

    if (startButton) {
        startButton.textContent = isSimulating ? 'Running...' : 'Start';
        startButton.disabled = !sourceNode || !destinationNode || isSimulating;
    }
}

function renderInfoPanel() {
    const infoPanelContainer = document.getElementById('info-panel-container');
    if (!infoPanelContainer) return;

    infoPanelContainer.innerHTML = ''; // Clear previous panel

    if (selectedNode) {
        const panel = document.createElement('div');
        panel.className = 'info-panel clay-panel';
        panel.innerHTML = `
            <button class="close-button">
                ${icons.X}
            </button>
            <h3 class="panel-title">${selectedNode.label}</h3>
            <p><strong>Type:</strong> <span class="capitalize">${selectedNode.type}</span></p>
            <p><strong>IP Address:</strong> <span>${selectedNode.ip || 'N/A'}</span></p>
        `;
        infoPanelContainer.appendChild(panel);
        panel.querySelector('.close-button').onclick = () => {
            selectedNode = null;
            renderInfoPanel(); // Remove the panel
        };
    }
}

function renderLogPanel() {
    const logContainer = document.getElementById('log-container');
    if (!logContainer) return;

    // Store the current scroll position
    const wasAtBottom = logContainer.scrollHeight - logContainer.scrollTop === logContainer.clientHeight;

    logContainer.innerHTML = ''; // Clear previous logs
    log.forEach((entry, i) => {
        const p = document.createElement('p');
        p.className = 'log-entry';
        if (entry.includes('✅')) p.classList.add('success');
        if (entry.includes('❌')) p.classList.add('error');
        p.textContent = entry;
        logContainer.appendChild(p);
    });

    // Only scroll to top if we were already at the bottom
    if (wasAtBottom) {
        logContainer.scrollTop = logContainer.scrollHeight;
    }
}


// --- SIMULATION LOGIC ---

function handleNodeClick(node) {
    if (isSimulating) return;
    selectedNode = node;
    renderInfoPanel(); // Update info panel

    if (!sourceNode) {
        sourceNode = node;
        addLog(`Source selected: ${node.label}`);
    } else if (!destinationNode && sourceNode.id !== node.id) {
        destinationNode = node;
        addLog(`Destination selected: ${node.label}`);
    } else if (sourceNode && destinationNode) {
        // If both are selected, clicking again resets for a new selection
        sourceNode = node;
        destinationNode = null;
        addLog(`Source re-selected: ${node.label}`);
    }
    renderControlPanel(); // Update control panel displays
    renderNetworkDiagram(); // Update node highlights
}

function handleStartSimulation() {
    if (!sourceNode || !destinationNode || isSimulating) return;

    addLog(`Finding path from ${sourceNode.label} to ${destinationNode.label}...`);
    const path = findPath(sourceNode.id, destinationNode.id);

    if (!path) {
        addLog(`❌ No path found between ${sourceNode.label} and ${destinationNode.label}.`);
        handleResetSimulation();
        return;
    }

    addLog(`🚀 Path found! Simulating ping...`);
    isSimulating = true;
    renderControlPanel(); // Update button state

    nodes.forEach(n => {
        n.status = path.includes(n.id) ? 'active' : 'idle';
    });
    renderNetworkDiagram(); // Update node active states

    const startNode = nodes.find(n => n.id === sourceNode.id);
    packet = {
        source: sourceNode.id,
        destination: destinationNode.id,
        path: path,
        step: 0,
        progress: 0,
        x: startNode.x,
        y: startNode.y
    };
    animatePacket();
}

function animatePacket() {
    if (!packet) {
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
            animationFrameId = null;
        }
        return;
    }

    const currentStepNode = nodes.find(n => n.id === packet.path[packet.step]);
    const nextStepNode = nodes.find(n => n.id === packet.path[packet.step + 1]);

    // Ensure both nodes exist before proceeding
    if (!currentStepNode || !nextStepNode) {
        addLog('❌ Simulation error: Node not found in path. Resetting.');
        handleResetSimulation();
        return;
    }

    packet.progress += 0.03; // Speed of the packet (adjusted slightly for smoother animation)

    if (packet.progress >= 1) {
        packet.step++;
        packet.progress = 0;

        if (packet.step >= packet.path.length - 1) {
            // Packet reached destination
            const dest = nodes.find(n => n.id === packet.destination);
            addLog(`✅ Packet delivered to ${dest.label} (${dest.ip || 'N/A'})`);
            isSimulating = false;
            packet = null;
            setTimeout(() => {
                nodes = JSON.parse(JSON.stringify(initialNodes)); // Deep copy to reset statuses
                renderNetworkDiagram(); // Reset node states visually
                renderControlPanel();
            }, 2000); // Small delay before resetting nodes
            return;
        } else {
            const currentNode = nodes.find(n => n.id === packet.path[packet.step]);
            addLog(`➡️ Passing through ${currentNode.label}`);
            // No need to set individual node status to active, the path already highlights
        }
    }

    packet.x = currentStepNode.x + (nextStepNode.x - currentStepNode.x) * packet.progress;
    packet.y = currentStepNode.y + (nextStepNode.y - currentStepNode.y) * packet.progress;

    renderNetworkDiagram(); // Re-render to move packet
    animationFrameId = requestAnimationFrame(animatePacket);
}


function handleResetSimulation() {
    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
    }
    sourceNode = null;
    destinationNode = null;
    selectedNode = null;
    packet = null;
    isSimulating = false;
    nodes = JSON.parse(JSON.stringify(initialNodes)); // Deep copy to reset original positions/statuses
    log = ["Simulation reset. Select a source and destination."];

    renderSimulationView(); // Re-render the whole simulation section
}


// --- DOCUMENTATION RENDERING ---

const documentationSections = [
    { icon: 'History', title: "From Packet Tracer to The Web", content: `Welcome, future network architect! This is a web-based simulation of a college campus network, similar to one you'd build in Cisco Packet Tracer. Packet Tracer excels at detailed configuration, while this simulation focuses on visualizing data flow and understanding network segmentation in real-time. The red WAN links echo the design of the ARPANET, the precursor to today's internet.`},
    { icon: 'GitBranch', title: "Switches & Routers", content: `Your network is divided into subnets (e.g., IT Dept, CS Dept). Switches (Layer 2) act as local postal offices, using MAC addresses to forward data frames within a subnet. Routers (Layer 3) are the main post offices, connecting different subnets using IP addresses and routing tables to forward packets towards their destination network.` },
    { icon: 'Server', title: "The Server Room", content: `This room hosts critical services. The WEB Server (1.0.0.3) hosts websites. The DNS Server (1.0.0.2) translates domain names to IP addresses (like a phonebook for the internet). The FTP Server (1.0.0.4) is a workhorse for file transfers.` },
    { icon: 'Dna', title: "Journey of a Packet", content: `Let's trace a ping from IT_LAB_1 (192.168.1.3) to the WEB Server (1.0.0.3). The packet travels from the PC to IT Switch, then to Router0. Router0 forwards it to Router1, then Router2. Router2 sends it to Server Switch, which finally delivers it to the WEB Server. This multi-hop journey is the core principle of the internet.`},
];

function renderDocumentation() {
    const documentationViewDiv = document.getElementById('documentation-view');
    if (!documentationViewDiv) return;

    documentationViewDiv.innerHTML = `
        <div class="documentation-grid">
            ${documentationSections.map(sec => `
                <div class="clay-panel documentation-item">
                    <h2>${icons[sec.icon]} ${sec.title}</h2>
                    <p>${sec.content}</p>
                </div>
            `).join('')}
        </div>
    `;
}

// --- FILES AND TEAM RENDERING ---

const teamMembers = [
    { name: 'Adwaith Narayan M', id: 'AM.EN.U4ECE22012' }, { name: 'Aher Abhishek', id: 'AM.EN.U4ECE22013' },
    { name: 'Karthik Nair', id: 'AM.EN.U4ECE22021' }, { name: 'Naveen Ram', id: 'AM.EN.U4ECE22030' },
    { name: 'Sunkara Indiresh', id: 'AM.EN.U4ECE22044' },
];
const projectFiles = [
    { name: 'Cisco Packet Tracer ', type: '(.pkt)', icon: 'FileCode', href: 'College Network.pkt' },
    { name: 'Project Report', type: '(.pdf)', icon: 'FileText', href: 'report.pdf' },
    { name: 'Presentation Slides', type: '(.pptx)', icon: 'Presentation', href: 'Presentation.pptx' },
];

function renderFilesAndTeamView() {
    const filesViewDiv = document.getElementById('files-view');
    if (!filesViewDiv) return;

    filesViewDiv.innerHTML = `
        <div class="files-team-grid">
            <div class="clay-panel">
                <h2>${icons.HardDrive} Project Files</h2>
                <div class="files-list">
                    ${projectFiles.map(file => `
                        <div class="file-item">
                            <div class="file-info">
                                ${icons[file.icon]}
                                <div>
                                    <p>${file.name}</p>
                                    <p>${file.type}</p>
                                </div>
                            </div>
                            <a href="${file.href}" download class="clay-button">Download</a>
                        </div>
                    `).join('')}
                </div>
            </div>
            <div class="clay-panel">
                <h2>${icons.Users} Our Team</h2>
                <div class="team-list">
                    ${teamMembers.map(member => `
                        <div class="team-member">
                            <p>${member.name}</p>
                            <p>${member.id}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

// --- ASSIGNMENTS DATA ---
const assignments = [
    {
        name: 'Adwaith Narayan M',
        id: 'AM.EN.U4ECE22012',
        files: [
            { name: 'Assignment ', type: '(.pdf)', href: 'adwaith_assignment1.pdf' },
            
        ]
    },
    {
        name: 'Aher Abhishek',
        id: 'AM.EN.U4ECE22013',
        files: [
            { name: 'Assignment ', type: '(.pdf)', href: 'abhishek_assignment1.pdf' },
        ]
    },
    {
        name: 'Karthik Nair',
        id: 'AM.EN.U4ECE22021',
        files: [
            { name: 'Assignment ', type: '(.pdf)', href: 'karthik_assignment1.pdf' },
        ]
    },
    {
        name: 'Naveen Ram',
        id: 'AM.EN.U4ECE22030',
        files: [
            { name: 'Assignment ', type: '(.pdf)', href: 'naveen_assignment1.pdf' },
        ]
    },
    {
        name: 'Sunkara Indiresh',
        id: 'AM.EN.U4ECE22044',
        files: [
            { name: 'Assignment ', type: '(.pdf)', href: 'indiresh_assignment1.pdf' },
        ]
    },
];

// --- ASSIGNMENTS VIEW RENDERING ---
function renderAssignmentsView() {
    const assignmentsViewDiv = document.getElementById('assignments-view');
    if (!assignmentsViewDiv) return;

    assignmentsViewDiv.innerHTML = `
        <div class="assignments-list">
            ${assignments.map((student, idx) => `
                <div class="assignment-student">
                    <button class="assignment-toggle" data-idx="${idx}">
                        <span>${student.name}</span>
                        <span class="student-id">${student.id}</span>
                    </button>
                    <div class="assignment-files" id="assignment-files-${idx}" style="display: none;">
                        ${student.files.length > 0 ? student.files.map(file => `
                            <div class="assignment-file-item">
                                <span>${file.name} ${file.type}</span>
                                <a href="${file.href}" download class="clay-button">Download</a>
                            </div>
                        `).join('') : '<div class="assignment-file-item">No files uploaded.</div>'}
                    </div>
                </div>
            `).join('')}
        </div>
    `;

    // Add event listeners for toggling
    assignments.forEach((_, idx) => {
        const toggleBtn = assignmentsViewDiv.querySelector(`.assignment-toggle[data-idx='${idx}']`);
        const filesDiv = assignmentsViewDiv.querySelector(`#assignment-files-${idx}`);
        if (toggleBtn && filesDiv) {
            toggleBtn.onclick = () => {
                filesDiv.style.display = filesDiv.style.display === 'none' ? 'block' : 'none';
            };
        }
    });
}

// --- INITIALIZATION ---

document.addEventListener('DOMContentLoaded', () => {
    // Set initial state
    nodes = JSON.parse(JSON.stringify(initialNodes)); // Deep copy to ensure original is preserved
    edges = JSON.parse(JSON.stringify(initialEdges));

    // Render initial views
    renderHeader();
    renderFooter(); // Static, render once

    // Set default active view
    // activeView is already initialized to 'simulation'
    renderNav(); // Render nav with correct active state

    // Render specific view content based on initial activeView
    if (activeView === 'simulation') {
        renderSimulationView();
    } else if (activeView === 'documentation') {
        renderDocumentation();
    } else if (activeView === 'files') {
        renderFilesAndTeamView();
    } else if (activeView === 'assignments') {
        renderAssignmentsView();
    }

    // Add assignments view section if not present
    if (!document.getElementById('assignments-view')) {
        const assignmentsDiv = document.createElement('div');
        assignmentsDiv.id = 'assignments-view';
        assignmentsDiv.className = 'view-section';
        document.body.appendChild(assignmentsDiv);
    }
});