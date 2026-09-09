export type IotTelemetryRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotTelemetryRecordStateMachine {
  private allowedTransitions: Record<IotTelemetryRecordState, IotTelemetryRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotTelemetryRecordState, to: IotTelemetryRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotTelemetryRecordState, to: IotTelemetryRecordState): IotTelemetryRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotTelemetryRecord: " + from + " -> " + to);
    }
    return to;
  }
}
