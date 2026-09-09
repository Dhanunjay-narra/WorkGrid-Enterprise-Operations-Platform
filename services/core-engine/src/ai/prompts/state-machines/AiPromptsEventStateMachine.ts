export type AiPromptsEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiPromptsEventStateMachine {
  private allowedTransitions: Record<AiPromptsEventState, AiPromptsEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiPromptsEventState, to: AiPromptsEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiPromptsEventState, to: AiPromptsEventState): AiPromptsEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiPromptsEvent: " + from + " -> " + to);
    }
    return to;
  }
}
