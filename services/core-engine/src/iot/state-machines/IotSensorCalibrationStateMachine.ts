export type IotSensorCalibrationState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class IotSensorCalibrationStateMachine {
  private validTransitions: Record<IotSensorCalibrationState, IotSensorCalibrationState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: IotSensorCalibrationState, next: IotSensorCalibrationState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: IotSensorCalibrationState, next: IotSensorCalibrationState): IotSensorCalibrationState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for IotSensorCalibration: from " + current + " to " + next);
    }
    return next;
  }
}
