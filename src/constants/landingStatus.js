const LandingStatus = {
  ACTIVA: "active",
  BORRADOR: "draft",
  FINALIZADA: "done",
};

function normalizeStatus(status) {
  if (!status) return null;

  const value = status.trim().toLowerCase();

  if (Object.values(LandingStatus).includes(value)) {
    return value;
  }

  return null;
}

module.exports = {
  LandingStatus,
  normalizeStatus,
};