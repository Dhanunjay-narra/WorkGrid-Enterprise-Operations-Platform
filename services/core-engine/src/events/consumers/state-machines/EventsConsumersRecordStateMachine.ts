export type EventsConsumersRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsConsumersRecordStateMachine {
  private allowedTransitions: Record<EventsConsumersRecordState, EventsConsumersRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsConsumersRecordState, to: EventsConsumersRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsConsumersRecordState, to: EventsConsumersRecordState): EventsConsumersRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsConsumersRecord: " + from + " -> " + to);
    }
    return to;
  }
}
