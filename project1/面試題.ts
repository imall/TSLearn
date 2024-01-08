/** a, b, c are callback function，
 * run doByOrder will log b, c, a
 * please modify doByOrder function to let it log
 * a, b, c
 */

const a = (callback: (result: string) => void) => {
  setTimeout(() => {
    callback("a");
  }, 500);
};

const b = (callback: (result: string) => void) => {
  setTimeout(() => {
    callback("b");
  }, 200);
};

const c = (callback: (result: string) => void) => {
  setTimeout(() => {
    callback("c");
  }, 300);
};

// modify this function to log "a" => "b" => "c"
const doByOrder = (callback: (result: string) => void) => {
  a(callback);
  b(callback);
  c(callback);
};

const doByOrder2 = (callback: (result: string) => void) => {
  a((resultA) => {
    callback(resultA);
    b((resultB) => {
      callback(resultB);
      c((resultC) => {
        callback(resultC);
      });
    });
  });
};

const doByOrder3 = async (callback: (result: string) => void) => {
  await new Promise<void>((resolve) => {
    a((result) => {
      callback(result);
      resolve();
    });
  });
  await new Promise<void>((resolve) => {
    b((result) => {
      callback(result);
      resolve();
    });
  });
  await new Promise<void>((resolve) => {
    c((result) => {
      callback(result);
      resolve();
    });
  });
};

const doByOrder4 = async (callback: (result: string) => void) => {
  const executeCallback = async (
    func: (callback: (result: string) => void) => void
  ) => {
    await new Promise<void>((resolve) => {
      func((result) => {
        callback(result);
        resolve();
      });
    });
  };

  await executeCallback(a);
  await executeCallback(b);
  await executeCallback(c);
};

const doByOrder5 = async (callback: (result: string) => void) => {
  const callbacks = [a, b, c];
  for (const func of callbacks) {
    await new Promise<void>((resolve) => {
      func((result) => {
        callback(result);
        resolve();
      });
    });
  }
};

doByOrder(console.log);
