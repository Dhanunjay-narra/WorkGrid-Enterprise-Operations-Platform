export type EventsConsumersScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsConsumersScheduleStateMachine {
  private allowedTransitions: Record<EventsConsumersScheduleState, EventsConsumersScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsConsumersScheduleState, to: EventsConsumersScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsConsumersScheduleState, to: EventsConsumersScheduleState): EventsConsumersScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsConsumersSchedule: " + from + " -> " + to);
    }
    return to;
  }
}
