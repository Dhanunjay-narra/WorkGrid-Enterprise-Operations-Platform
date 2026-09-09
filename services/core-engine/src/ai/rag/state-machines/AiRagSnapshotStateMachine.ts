export type AiRagSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiRagSnapshotStateMachine {
  private allowedTransitions: Record<AiRagSnapshotState, AiRagSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiRagSnapshotState, to: AiRagSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiRagSnapshotState, to: AiRagSnapshotState): AiRagSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiRagSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
