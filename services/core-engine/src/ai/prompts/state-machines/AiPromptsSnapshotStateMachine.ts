export type AiPromptsSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiPromptsSnapshotStateMachine {
  private allowedTransitions: Record<AiPromptsSnapshotState, AiPromptsSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiPromptsSnapshotState, to: AiPromptsSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiPromptsSnapshotState, to: AiPromptsSnapshotState): AiPromptsSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiPromptsSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
