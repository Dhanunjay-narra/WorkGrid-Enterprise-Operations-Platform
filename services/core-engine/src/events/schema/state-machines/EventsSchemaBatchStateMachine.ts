export type EventsSchemaBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsSchemaBatchStateMachine {
  private allowedTransitions: Record<EventsSchemaBatchState, EventsSchemaBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsSchemaBatchState, to: EventsSchemaBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsSchemaBatchState, to: EventsSchemaBatchState): EventsSchemaBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsSchemaBatch: " + from + " -> " + to);
    }
    return to;
  }
}
