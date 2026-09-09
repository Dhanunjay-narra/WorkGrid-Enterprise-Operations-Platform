export type IotTelemetryTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotTelemetryTaskStateMachine {
  private allowedTransitions: Record<IotTelemetryTaskState, IotTelemetryTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotTelemetryTaskState, to: IotTelemetryTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotTelemetryTaskState, to: IotTelemetryTaskState): IotTelemetryTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotTelemetryTask: " + from + " -> " + to);
    }
    return to;
  }
}
