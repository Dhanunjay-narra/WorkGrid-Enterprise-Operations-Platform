export type IntMappingsSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntMappingsSnapshotStateMachine {
  private allowedTransitions: Record<IntMappingsSnapshotState, IntMappingsSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntMappingsSnapshotState, to: IntMappingsSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntMappingsSnapshotState, to: IntMappingsSnapshotState): IntMappingsSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntMappingsSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
