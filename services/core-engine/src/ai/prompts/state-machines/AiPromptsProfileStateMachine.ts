export type AiPromptsProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiPromptsProfileStateMachine {
  private allowedTransitions: Record<AiPromptsProfileState, AiPromptsProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiPromptsProfileState, to: AiPromptsProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiPromptsProfileState, to: AiPromptsProfileState): AiPromptsProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiPromptsProfile: " + from + " -> " + to);
    }
    return to;
  }
}
