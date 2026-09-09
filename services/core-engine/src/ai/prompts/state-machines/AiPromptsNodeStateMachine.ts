export type AiPromptsNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiPromptsNodeStateMachine {
  private allowedTransitions: Record<AiPromptsNodeState, AiPromptsNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiPromptsNodeState, to: AiPromptsNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiPromptsNodeState, to: AiPromptsNodeState): AiPromptsNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiPromptsNode: " + from + " -> " + to);
    }
    return to;
  }
}
