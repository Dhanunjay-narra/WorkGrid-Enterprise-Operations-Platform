export type CrmTerritoryPayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmTerritoryPayloadStateMachine {
  private allowedTransitions: Record<CrmTerritoryPayloadState, CrmTerritoryPayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmTerritoryPayloadState, to: CrmTerritoryPayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmTerritoryPayloadState, to: CrmTerritoryPayloadState): CrmTerritoryPayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmTerritoryPayload: " + from + " -> " + to);
    }
    return to;
  }
}
