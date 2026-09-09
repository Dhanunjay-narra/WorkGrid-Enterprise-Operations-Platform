export type CrmTerritorySnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmTerritorySnapshotStateMachine {
  private allowedTransitions: Record<CrmTerritorySnapshotState, CrmTerritorySnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmTerritorySnapshotState, to: CrmTerritorySnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmTerritorySnapshotState, to: CrmTerritorySnapshotState): CrmTerritorySnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmTerritorySnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
