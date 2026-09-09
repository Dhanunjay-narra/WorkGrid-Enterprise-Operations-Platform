export type AiToolsSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiToolsSnapshotStateMachine {
  private allowedTransitions: Record<AiToolsSnapshotState, AiToolsSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiToolsSnapshotState, to: AiToolsSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiToolsSnapshotState, to: AiToolsSnapshotState): AiToolsSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiToolsSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
