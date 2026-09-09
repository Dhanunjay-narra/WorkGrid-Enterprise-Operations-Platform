export type SupportEscalationEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportEscalationEntryStateMachine {
  private allowedTransitions: Record<SupportEscalationEntryState, SupportEscalationEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportEscalationEntryState, to: SupportEscalationEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportEscalationEntryState, to: SupportEscalationEntryState): SupportEscalationEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportEscalationEntry: " + from + " -> " + to);
    }
    return to;
  }
}
