export type AiPromptsThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiPromptsThresholdStateMachine {
  private allowedTransitions: Record<AiPromptsThresholdState, AiPromptsThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiPromptsThresholdState, to: AiPromptsThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiPromptsThresholdState, to: AiPromptsThresholdState): AiPromptsThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiPromptsThreshold: " + from + " -> " + to);
    }
    return to;
  }
}
