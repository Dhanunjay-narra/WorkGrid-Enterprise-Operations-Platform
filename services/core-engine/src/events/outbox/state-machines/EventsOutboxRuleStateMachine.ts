export type EventsOutboxRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsOutboxRuleStateMachine {
  private allowedTransitions: Record<EventsOutboxRuleState, EventsOutboxRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsOutboxRuleState, to: EventsOutboxRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsOutboxRuleState, to: EventsOutboxRuleState): EventsOutboxRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsOutboxRule: " + from + " -> " + to);
    }
    return to;
  }
}
