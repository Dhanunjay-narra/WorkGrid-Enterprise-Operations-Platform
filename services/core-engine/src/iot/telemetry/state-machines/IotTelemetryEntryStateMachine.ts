export type IotTelemetryEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotTelemetryEntryStateMachine {
  private allowedTransitions: Record<IotTelemetryEntryState, IotTelemetryEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotTelemetryEntryState, to: IotTelemetryEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotTelemetryEntryState, to: IotTelemetryEntryState): IotTelemetryEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotTelemetryEntry: " + from + " -> " + to);
    }
    return to;
  }
}
