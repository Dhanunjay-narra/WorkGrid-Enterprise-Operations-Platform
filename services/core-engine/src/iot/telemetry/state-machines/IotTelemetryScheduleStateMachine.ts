export type IotTelemetryScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotTelemetryScheduleStateMachine {
  private allowedTransitions: Record<IotTelemetryScheduleState, IotTelemetryScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotTelemetryScheduleState, to: IotTelemetryScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotTelemetryScheduleState, to: IotTelemetryScheduleState): IotTelemetryScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotTelemetrySchedule: " + from + " -> " + to);
    }
    return to;
  }
}
