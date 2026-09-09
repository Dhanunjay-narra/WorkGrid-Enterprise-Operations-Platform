export type AiRagEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiRagEntryStateMachine {
  private allowedTransitions: Record<AiRagEntryState, AiRagEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiRagEntryState, to: AiRagEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiRagEntryState, to: AiRagEntryState): AiRagEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiRagEntry: " + from + " -> " + to);
    }
    return to;
  }
}
