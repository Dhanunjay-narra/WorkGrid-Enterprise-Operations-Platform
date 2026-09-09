export type AiToolsEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiToolsEntryStateMachine {
  private allowedTransitions: Record<AiToolsEntryState, AiToolsEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiToolsEntryState, to: AiToolsEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiToolsEntryState, to: AiToolsEntryState): AiToolsEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiToolsEntry: " + from + " -> " + to);
    }
    return to;
  }
}
