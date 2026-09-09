export type SupTicketTagState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class SupTicketTagStateMachine {
  private validTransitions: Record<SupTicketTagState, SupTicketTagState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: SupTicketTagState, next: SupTicketTagState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: SupTicketTagState, next: SupTicketTagState): SupTicketTagState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for SupTicketTag: from " + current + " to " + next);
    }
    return next;
  }
}
