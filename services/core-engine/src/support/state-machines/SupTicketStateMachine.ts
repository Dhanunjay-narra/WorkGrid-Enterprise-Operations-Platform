export type SupTicketState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class SupTicketStateMachine {
  private validTransitions: Record<SupTicketState, SupTicketState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: SupTicketState, next: SupTicketState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: SupTicketState, next: SupTicketState): SupTicketState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for SupTicket: from " + current + " to " + next);
    }
    return next;
  }
}
