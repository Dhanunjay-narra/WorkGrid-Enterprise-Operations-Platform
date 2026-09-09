export type EventsSchemaRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsSchemaRuleStateMachine {
  private allowedTransitions: Record<EventsSchemaRuleState, EventsSchemaRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsSchemaRuleState, to: EventsSchemaRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsSchemaRuleState, to: EventsSchemaRuleState): EventsSchemaRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsSchemaRule: " + from + " -> " + to);
    }
    return to;
  }
}
