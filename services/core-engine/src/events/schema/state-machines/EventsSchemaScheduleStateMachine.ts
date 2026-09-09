export type EventsSchemaScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsSchemaScheduleStateMachine {
  private allowedTransitions: Record<EventsSchemaScheduleState, EventsSchemaScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsSchemaScheduleState, to: EventsSchemaScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsSchemaScheduleState, to: EventsSchemaScheduleState): EventsSchemaScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsSchemaSchedule: " + from + " -> " + to);
    }
    return to;
  }
}
