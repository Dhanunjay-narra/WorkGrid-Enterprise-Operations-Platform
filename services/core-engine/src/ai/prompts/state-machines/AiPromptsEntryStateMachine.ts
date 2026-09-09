export type AiPromptsEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiPromptsEntryStateMachine {
  private allowedTransitions: Record<AiPromptsEntryState, AiPromptsEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiPromptsEntryState, to: AiPromptsEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiPromptsEntryState, to: AiPromptsEntryState): AiPromptsEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiPromptsEntry: " + from + " -> " + to);
    }
    return to;
  }
}
