export type IotTelemetryItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotTelemetryItemStateMachine {
  private allowedTransitions: Record<IotTelemetryItemState, IotTelemetryItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotTelemetryItemState, to: IotTelemetryItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotTelemetryItemState, to: IotTelemetryItemState): IotTelemetryItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotTelemetryItem: " + from + " -> " + to);
    }
    return to;
  }
}
