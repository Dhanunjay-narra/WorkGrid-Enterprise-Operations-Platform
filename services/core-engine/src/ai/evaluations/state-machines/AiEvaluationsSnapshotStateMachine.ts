export type AiEvaluationsSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiEvaluationsSnapshotStateMachine {
  private allowedTransitions: Record<AiEvaluationsSnapshotState, AiEvaluationsSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiEvaluationsSnapshotState, to: AiEvaluationsSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiEvaluationsSnapshotState, to: AiEvaluationsSnapshotState): AiEvaluationsSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiEvaluationsSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
