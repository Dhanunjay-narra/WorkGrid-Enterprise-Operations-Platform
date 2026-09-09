export type CrmTerritoryRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmTerritoryRecordStateMachine {
  private allowedTransitions: Record<CrmTerritoryRecordState, CrmTerritoryRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmTerritoryRecordState, to: CrmTerritoryRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmTerritoryRecordState, to: CrmTerritoryRecordState): CrmTerritoryRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmTerritoryRecord: " + from + " -> " + to);
    }
    return to;
  }
}
