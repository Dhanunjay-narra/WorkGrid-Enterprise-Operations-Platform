export type SupportAgentsEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportAgentsEntryStateMachine {
  private allowedTransitions: Record<SupportAgentsEntryState, SupportAgentsEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportAgentsEntryState, to: SupportAgentsEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportAgentsEntryState, to: SupportAgentsEntryState): SupportAgentsEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportAgentsEntry: " + from + " -> " + to);
    }
    return to;
  }
}
