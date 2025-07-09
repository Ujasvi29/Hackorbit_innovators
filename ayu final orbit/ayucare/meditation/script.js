const breathPhases = [
    { label: "Inhale", duration: 4000 },
    { label: "Hold", duration: 4000 },
    { label: "Exhale", duration: 4000 },
    { label: "Hold", duration: 4000 },
  ];
  
  let breathIndex = 0;
  let breathInterval;
  const breathCircle = document.getElementById("breath-circle");
  const startBtn = document.getElementById("start-breathing");
  
  function startBreathingCycle() {
    startBtn.disabled = true;
    breathIndex = 0;
    updateBreathPhase();
  }
  
  function updateBreathPhase() {
    const phase = breathPhases[breathIndex];
    breathCircle.textContent = phase.label;
  
    // Animate circle (scale)
    if (phase.label === "Inhale") {
      breathCircle.classList.add("scale-125");
    } else if (phase.label === "Exhale") {
      breathCircle.classList.remove("scale-125");
    }
  
    // Loop phases
    breathIndex = (breathIndex + 1) % breathPhases.length;
    clearTimeout(breathInterval);
    breathInterval = setTimeout(updateBreathPhase, phase.duration);
  }
  
  startBtn.addEventListener("click", startBreathingCycle);