export type IotTelemetryMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotTelemetryMappingStateMachine {
  private allowedTransitions: Record<IotTelemetryMappingState, IotTelemetryMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotTelemetryMappingState, to: IotTelemetryMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotTelemetryMappingState, to: IotTelemetryMappingState): IotTelemetryMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotTelemetryMapping: " + from + " -> " + to);
    }
    return to;
  }
}
