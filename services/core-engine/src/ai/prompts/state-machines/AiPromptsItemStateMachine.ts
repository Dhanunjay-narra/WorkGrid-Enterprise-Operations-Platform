export type AiPromptsItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiPromptsItemStateMachine {
  private allowedTransitions: Record<AiPromptsItemState, AiPromptsItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiPromptsItemState, to: AiPromptsItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiPromptsItemState, to: AiPromptsItemState): AiPromptsItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiPromptsItem: " + from + " -> " + to);
    }
    return to;
  }
}
