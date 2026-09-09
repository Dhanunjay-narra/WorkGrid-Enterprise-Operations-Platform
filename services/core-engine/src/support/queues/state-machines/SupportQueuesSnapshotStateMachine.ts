export type SupportQueuesSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportQueuesSnapshotStateMachine {
  private allowedTransitions: Record<SupportQueuesSnapshotState, SupportQueuesSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportQueuesSnapshotState, to: SupportQueuesSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportQueuesSnapshotState, to: SupportQueuesSnapshotState): SupportQueuesSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportQueuesSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
