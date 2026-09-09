export type AiPromptsSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiPromptsSessionStateMachine {
  private allowedTransitions: Record<AiPromptsSessionState, AiPromptsSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiPromptsSessionState, to: AiPromptsSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiPromptsSessionState, to: AiPromptsSessionState): AiPromptsSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiPromptsSession: " + from + " -> " + to);
    }
    return to;
  }
}
