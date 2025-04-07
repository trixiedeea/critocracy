// ===== Constants =====
const MIN_PLAYERS = 1;
const MAX_PLAYERS = 6;
const DICE_SIDES = 6;
const ROLES = ['Historian', 'Revolutionary', 'Politician', 'Colonialist', 'Entrepreneur', 'Artist'];
const STARTING_RESOURCES = { money: 0, knowledge: 0, influence: 0 };

// ===== State =====
let players = [];
let currentPlayerIndex = 0;

// ===== Main Setup =====
function startPlayerSetup(humanCount, computerCount) {
  players = [];
  const roleContainer = document.createElement('div');
  roleContainer.id = 'role-selection';

  // Human player setup
  for (let i = 0; i < humanCount; i++) {
    const name = prompt(`Enter name for Human Player ${i + 1}:`) || `Human ${i + 1}`;
    const player = {
      name,
      type: 'human',
      resources: { ...STARTING_RESOURCES },
      role: null,
      roll: null
    };
    players.push(player);

    const wrapper = document.createElement('div');
    wrapper.className = 'player-role-select';

    const label = document.createElement('label');
    label.textContent = `${name}, choose a role: `;

    const select = document.createElement('select');
    ROLES.forEach(role => {
      const option = document.createElement('option');
      option.value = role;
      option.textContent = role;
      select.appendChild(option);
    });

    select.addEventListener('change', () => {
      player.role = select.value;
    });

    wrapper.appendChild(label);
    wrapper.appendChild(select);
    roleContainer.appendChild(wrapper);
  }

  // CPU player setup
  for (let i = 0; i < computerCount; i++) {
    players.push({
      name: `CPU ${i + 1}`,
      type: 'computer',
      resources: { ...STARTING_RESOURCES },
      role: null,
      roll: null
    });
  }

  const confirmButton = document.createElement('button');
  confirmButton.textContent = 'Confirm Roles & Start Game';
  confirmButton.addEventListener('click', () => {
    const selectedRoles = new Set(players.filter(p => p.type === 'human').map(p => p.role));
    if (selectedRoles.size < humanCount) {
      alert('Each human must pick a unique role!');
      return;
    }

    // Assign random roles to CPU players
    const remainingRoles = ROLES.filter(role => !selectedRoles.has(role));
    let rIndex = 0;
    players.forEach(p => {
      if (p.type === 'computer') {
        p.role = remainingRoles[rIndex++] || 'Randomly Assigned';
      }
    });

    roleContainer.remove();
    rollForTurnOrder();
  });

  roleContainer.appendChild(confirmButton);
  document.body.appendChild(roleContainer);
}

function rollForTurnOrder() {
  players.forEach(p => {
    p.roll = Math.floor(Math.random() * DICE_SIDES) + 1;
  });

  players.sort((a, b) => b.roll - a.roll);
  currentPlayerIndex = 0;

  console.log('🎲 Turn order determined:');
  players.forEach((p, i) => {
    console.log(`${i + 1}: ${p.name} (${p.role}) - Roll: ${p.roll}`);
  });

  startGame();
}

function startGame() {
  console.log('✅ Game setup complete. Starting game...');
  console.log('🧑‍🤝‍🧑 Players:', players);
}

}