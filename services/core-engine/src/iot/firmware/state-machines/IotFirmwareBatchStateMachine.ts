export type IotFirmwareBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotFirmwareBatchStateMachine {
  private allowedTransitions: Record<IotFirmwareBatchState, IotFirmwareBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotFirmwareBatchState, to: IotFirmwareBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotFirmwareBatchState, to: IotFirmwareBatchState): IotFirmwareBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotFirmwareBatch: " + from + " -> " + to);
    }
    return to;
  }
}
