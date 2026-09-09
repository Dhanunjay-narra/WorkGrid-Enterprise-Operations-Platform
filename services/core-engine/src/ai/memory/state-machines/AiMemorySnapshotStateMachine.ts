export type AiMemorySnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiMemorySnapshotStateMachine {
  private allowedTransitions: Record<AiMemorySnapshotState, AiMemorySnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiMemorySnapshotState, to: AiMemorySnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiMemorySnapshotState, to: AiMemorySnapshotState): AiMemorySnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiMemorySnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
