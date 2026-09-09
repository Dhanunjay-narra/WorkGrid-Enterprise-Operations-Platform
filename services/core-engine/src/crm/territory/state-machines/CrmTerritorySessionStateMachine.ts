export type CrmTerritorySessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmTerritorySessionStateMachine {
  private allowedTransitions: Record<CrmTerritorySessionState, CrmTerritorySessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmTerritorySessionState, to: CrmTerritorySessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmTerritorySessionState, to: CrmTerritorySessionState): CrmTerritorySessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmTerritorySession: " + from + " -> " + to);
    }
    return to;
  }
}
