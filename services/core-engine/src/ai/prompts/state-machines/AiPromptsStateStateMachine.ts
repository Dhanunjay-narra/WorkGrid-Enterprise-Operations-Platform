export type AiPromptsStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiPromptsStateStateMachine {
  private allowedTransitions: Record<AiPromptsStateState, AiPromptsStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiPromptsStateState, to: AiPromptsStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiPromptsStateState, to: AiPromptsStateState): AiPromptsStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiPromptsState: " + from + " -> " + to);
    }
    return to;
  }
}
