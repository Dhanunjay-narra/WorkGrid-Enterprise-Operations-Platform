export type CrmLeadsSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmLeadsSnapshotStateMachine {
  private allowedTransitions: Record<CrmLeadsSnapshotState, CrmLeadsSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmLeadsSnapshotState, to: CrmLeadsSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmLeadsSnapshotState, to: CrmLeadsSnapshotState): CrmLeadsSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmLeadsSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
