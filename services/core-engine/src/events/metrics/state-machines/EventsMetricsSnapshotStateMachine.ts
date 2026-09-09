export type EventsMetricsSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsMetricsSnapshotStateMachine {
  private allowedTransitions: Record<EventsMetricsSnapshotState, EventsMetricsSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsMetricsSnapshotState, to: EventsMetricsSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsMetricsSnapshotState, to: EventsMetricsSnapshotState): EventsMetricsSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsMetricsSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
