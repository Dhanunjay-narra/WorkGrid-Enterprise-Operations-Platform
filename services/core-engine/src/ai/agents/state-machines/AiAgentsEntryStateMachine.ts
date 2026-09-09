export type AiAgentsEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiAgentsEntryStateMachine {
  private allowedTransitions: Record<AiAgentsEntryState, AiAgentsEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiAgentsEntryState, to: AiAgentsEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiAgentsEntryState, to: AiAgentsEntryState): AiAgentsEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiAgentsEntry: " + from + " -> " + to);
    }
    return to;
  }
}
