export type IotTelemetryPayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotTelemetryPayloadStateMachine {
  private allowedTransitions: Record<IotTelemetryPayloadState, IotTelemetryPayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotTelemetryPayloadState, to: IotTelemetryPayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotTelemetryPayloadState, to: IotTelemetryPayloadState): IotTelemetryPayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotTelemetryPayload: " + from + " -> " + to);
    }
    return to;
  }
}
