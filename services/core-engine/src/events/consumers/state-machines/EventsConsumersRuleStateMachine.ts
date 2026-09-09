export type EventsConsumersRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsConsumersRuleStateMachine {
  private allowedTransitions: Record<EventsConsumersRuleState, EventsConsumersRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsConsumersRuleState, to: EventsConsumersRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsConsumersRuleState, to: EventsConsumersRuleState): EventsConsumersRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsConsumersRule: " + from + " -> " + to);
    }
    return to;
  }
}
