export type EventsDeadletterRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsDeadletterRuleStateMachine {
  private allowedTransitions: Record<EventsDeadletterRuleState, EventsDeadletterRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsDeadletterRuleState, to: EventsDeadletterRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsDeadletterRuleState, to: EventsDeadletterRuleState): EventsDeadletterRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsDeadletterRule: " + from + " -> " + to);
    }
    return to;
  }
}
